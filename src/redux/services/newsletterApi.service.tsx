import { apiRequest } from "../helper/apiHelper";

interface BroadcastNewsletterData {
  name: string;
  replyTo: string;
  subject: string;
  message: string;
}

interface BroadcastNewsletterResponse {
  status: boolean;
  message: string;
  data: any;
  errors?: { replyTo?: string[] };
}

export async function broadcastNewsletter(data: BroadcastNewsletterData): Promise<BroadcastNewsletterResponse> {
  const url = `https://climrenew.com/api/v2/admin/newsletter/broadcast`;
  return await apiRequest<BroadcastNewsletterResponse>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
