import { inngest } from "@/lib/inngest/client";

export async function POST(req) {
  const body = await req.json();

  await inngest.send({
    name: "test/hello.world",   // 👈 Event name that matches your function
    data: { email: body.email || "someone@example.com" },
  });

  return Response.json({ status: "Event sent" });
}
