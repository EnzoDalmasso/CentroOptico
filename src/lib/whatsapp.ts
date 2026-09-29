import { business } from "@/config/business";

type WhatsAppIntent =
  | { kind: "general" }
  | { kind: "product"; productName: string; brandName?: string }
  | { kind: "service"; serviceName: string }
  | { kind: "custom"; message: string };

/** Genera el texto predefinido según el motivo de la consulta. */
export function buildWhatsAppMessage(intent: WhatsAppIntent = { kind: "general" }): string {
  switch (intent.kind) {
    case "product": {
      const model = intent.brandName ? `${intent.brandName} ${intent.productName}` : intent.productName;
      return `Hola! Quería consultar por el modelo ${model}.`;
    }
    case "service":
      return `Hola! Quería consultar por el servicio de ${intent.serviceName.toLowerCase()}.`;
    case "custom":
      return intent.message;
    case "general":
      return business.whatsapp.defaultMessage;
  }
}

/** URL de WhatsApp (wa.me) con el mensaje ya codificado. */
export function getWhatsAppUrl(intent?: WhatsAppIntent): string {
  const text = encodeURIComponent(buildWhatsAppMessage(intent));
  return `https://wa.me/${business.whatsapp.number}?text=${text}`;
}
