import {ConfigService} from '@nestjs/config';
import {Test, TestingModule} from '@nestjs/testing';
import {PrismaService} from '@services/prisma.service';
import {EventService} from './event.service';

const events = [
  {
    id: '9d198df4-839a-4c06-aa21-9360c4c2bf45',
    name: 'McClure-Mraz',
    start: '2022-08-05 23:10:20',
    end: '2022-11-14 22:08:35',
    place: 'Peñaflor',
  },
  {
    id: '976602f6-085e-4ba9-b032-b6e79704c274',
    name: 'Effertz Group',
    start: '2022-03-20 03:51:30',
    end: '2022-05-06 08:15:09',
    place: 'Zhirnovsk',
  },
  {
    id: '0f84d090-60ad-4141-9b2c-a4597ac76adc',
    name: 'Blanda-Robel',
    start: '2022-10-16 06:45:23',
    end: '2021-11-18 21:11:58',
    place: 'Kambove',
  },
];

const singleEvent = events[0];

const mockPrismaService = {
  event: {
    findMany: jest.fn().mockResolvedValue(events),
    findUnique: jest.fn().mockResolvedValue(singleEvent),
    findFirst: jest.fn().mockResolvedValue(singleEvent),
    create: jest.fn().mockReturnValue(singleEvent),
    save: jest.fn(),
    update: jest.fn().mockResolvedValue(singleEvent),
    delete: jest.fn().mockResolvedValue(singleEvent),
  },
};

describe('EventService', () => {
  let service: EventService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, EventService, PrismaService],
    })
        .overrideProvider(PrismaService)
        .useValue(mockPrismaService)
        .compile();

    service = module.get<EventService>(EventService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllEvents', () => {
    it('should return an array of events', () => {
      expect(service.getEvents({})).resolves.toEqual(events);
    });
  });

  describe('getEventById', () => {
    it('should return event with specified id', () => {
      expect(
          service.getEventById({
            id: '9d198df4-839a-4c06-aa21-9360c4c2bf45',
          }),
      ).resolves.toEqual(singleEvent);
    });
  });

  describe('createEvent', () => {
    it('should successfully insert an event', () => {
      expect(
          service.createEvent({
            name: singleEvent.name,
            start: singleEvent.start,
            end: singleEvent.end,
            place: singleEvent.place,
          }),
      ).toEqual(singleEvent);
    });
  });

  describe('updateEvent', () => {
    it('should successfully update an event', () => {
      expect(
          service.updateEvent({
            where: {},
            data: {
              id: singleEvent.id,
              name: singleEvent.name,
              start: singleEvent.start,
              end: singleEvent.end,
              place: singleEvent.place,
            },
          }),
      ).resolves.toEqual(singleEvent);
    });
  });

  describe('deleteEvent', () => {
    it('should successfully delete an event', () => {
      expect(
          service.deleteEvent({id: '9d198df4-839a-4c06-aa21-9360c4c2bf45'}),
      ).resolves.toEqual({deleted: true});
    });

    it('should fail on wrong id', () => {
      jest
          .spyOn(prisma.event, 'delete')
          .mockRejectedValueOnce(new Error('No event with this id exists'));
      expect(service.deleteEvent({id: 'wrong uuid'})).resolves.toEqual({
        deleted: false,
        message: expect.any(String),
      });
    });
  });
});
