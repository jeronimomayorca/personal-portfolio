import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  sendContact: defineAction({
    input: z.object({
      context: z.string(),
      contact: z.string(),
    }),
    handler: async (input) => {
      const token = import.meta.env.TELEGRAM_TOKEN;
      const chatId = import.meta.env.TELEGRAM_CHAT_ID;
      
      const text = `🚀 <b>Nuevo mensaje desde el Portafolio</b>\n\n` +
                   `<b>Proyecto:</b> ${input.context}\n` +
                   `<b>Contacto:</b> ${input.contact}`;

      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }

      return { success: true };
    }
  })
}
