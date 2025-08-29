import { NextResponse } from "next/server";
import { google } from "googleapis";

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Use environment variables for service account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const timestamp = new Date().toISOString();

    // Column order in your Google Sheet
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
        timestamp,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:I", // adjust based on your columns
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
