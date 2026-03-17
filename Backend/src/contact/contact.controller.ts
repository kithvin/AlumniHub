import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    const contact = await this.contactService.create(createContactDto);

    return {
      success: true,
      message: 'Message sent successfully',
      data: contact,
    };
  }

  @Get()
  async findAll() {
    const contacts = await this.contactService.findAll();

    return {
      success: true,
      data: contacts,
    };
  }
}