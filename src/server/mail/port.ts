export interface OutboundMail {
  to: string;
  subject: string;
  text: string;
}

export interface MailPort {
  send(message: OutboundMail): Promise<void>;
}

export class UnconfiguredMailPort implements MailPort {
  async send(_message: OutboundMail): Promise<void> {
    throw new Error("A mail provider is not configured.");
  }
}
