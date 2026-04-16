// Função para validar celular brasileiro (aceita com ou sem máscara)
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;

  // Remove tudo que não for número
  const cleaned = phone.replace(/\D/g, "");

  // Deve ter exatamente 11 dígitos (DDD + 9 dígitos)
  if (cleaned.length !== 11) return false;

  // Evita números repetidos (ex: 99999999999)
  if (/^(\d)\1+$/.test(cleaned)) return false;

  const ddd = cleaned.substring(0, 2);

  // DDD válido (entre 11 e 99)
  if (parseInt(ddd) < 11 || parseInt(ddd) > 99) return false;

  // Terceiro dígito deve ser 9 (celular)
  if (cleaned[2] !== "9") return false;

  return true;
}