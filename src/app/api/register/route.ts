import { NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import { promises as fs } from "fs";

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Load service account key
    const keyFile = path.join(process.cwd(), "service-account.json");
    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // put your sheet id in .env.local
    const timestamp = new Date().toISOString();

    // Column order in Sheet
    const values = [
      [
        body.name || "",
        body.mobileNumber || "",
        body.email || "",
        body.locality || "",
        body.pincode || "",
        body.age || "",
        (body.interests || []).join(", "),
        body.notes || "",
        timestamp, // new column for timestamp
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:I", // update depending on your sheet col count
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
