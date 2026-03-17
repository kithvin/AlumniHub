import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private readonly contactModel: Model<ContactDocument>,
    private readonly mailService: MailService,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const newContact = new this.contactModel(createContactDto);
    const savedContact = await newContact.save();

    try {
      await this.mailService.sendContactEmail({
        fullName: createContactDto.fullName,
        email: createContactDto.email,
        subject: createContactDto.subject,
        message: createContactDto.message,
      });
    } catch (error) {
      console.error('Email error:', error);
    }

    return savedContact;
  }

  async findAll() {
    return this.contactModel.find().sort({ createdAt: -1 });
  }
}