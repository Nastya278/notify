import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, template: string, context: any) {
    await this.mailerService.sendMail({
      to,               // Получатель
      subject,          // Тема письма
      template,         // Шаблон письма
      context,          // Данные для шаблона
    });
  }
}