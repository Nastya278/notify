import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send-welcome-email')
  async sendWelcomeEmail() {
    const to = 'recipient@example.com'; // Укажите получателя
    const subject = 'Welcome to our service!';
    const template = 'welcome'; // Название шаблона без расширения
    const context = { name: 'John Doe' }; // Данные для шаблона

    await this.notificationService.sendEmail(to, subject, template, context);
    return { message: 'Email sent successfully!' };
  }
}