/* eslint-disable node/no-unpublished-import */
import { Test, TestingModule } from '@nestjs/testing';
import { SessionService } from './session.service';
import { Event } from '@models/dto/gql/event';

const preMadeEvent = {
  id: '9d198df4-839a-4c06-aa21-9360c4c2bf45',
  name: 'McClure-Mraz',
  start: '2022-08-05 23:10:20',
  end: '2022-11-14 22:08:35',
  place: 'Peñaflor',
};

const unregisteredEvent: Event = {
  id: '4229502d-9d7d-4108-b1c9-7a64c01e80d5',
  name: 'The Chauncey 200th birthday',
  start: (() => {
    const startDate = new Date();
    startDate.setHours(new Date().getHours() - 1);
    return startDate;
  })(),
  end: (() => {
    const startDate = new Date();
    startDate.setHours(new Date().getHours() + 1);
    return startDate;
  })(),
  place: 'Secret bunker',
};

const sessions = new Map([
  [
    '$2y$10$lG9hIPhwCepVAG0cKyOp1.hlPfqCBYNwWpyWKlgF1BFbNt6UKsPaO',
    {
      id: '$2y$10$lG9hIPhwCepVAG0cKyOp1.hlPfqCBYNwWpyWKlgF1BFbNt6UKsPaO',
      event: preMadeEvent,
      active: false,
    },
  ],
  [
    '$2y$10$4ZAazBVlb8NVL40R0ffraumQ52J/xYwgPSfuo3M2XIfk2gmMARjTK',
    {
      id: '$2y$10$4ZAazBVlb8NVL40R0ffraumQ52J/xYwgPSfuo3M2XIfk2gmMARjTK',
      event: {
        id: '976602f6-085e-4ba9-b032-b6e79704c274',
        name: 'Effertz Group',
        start: '2022-03-20 03:51:30',
        end: '2022-05-06 08:15:09',
        place: 'Zhirnovsk',
      },
      active: false,
    },
  ],
  [
    '$2y$10$/Rvn.9VnEpp9ioctfAyvTOBKapSvbj28JNtxkeT1S800Cmv5KcFje',
    {
      id: '$2y$10$/Rvn.9VnEpp9ioctfAyvTOBKapSvbj28JNtxkeT1S800Cmv5KcFje',
      event: {
        id: '0f84d090-60ad-4141-9b2c-a4597ac76adc',
        name: 'Blanda-Robel',
        start: '2022-10-16 06:45:23',
        end: '2021-11-18 21:11:58',
        place: 'Kambove',
      },
      active: false,
    },
  ],
]);

const singleSession = Array.from(sessions.values())[0];

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionService],
    }).compile();

    service = module.get<SessionService>(SessionService);
    Object.defineProperty(service, 'sessions', {
      get() {
        return sessions;
      },
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllSessions', () => {
    it('should return an array of sessions', () => {
      expect(service.getSessions()).toEqual(Array.from(sessions.values()));
    });
  });

  describe('getSessionById', () => {
    it('should return session with specified id', () => {
      expect(
        service.getSessionById(
          '$2y$10$lG9hIPhwCepVAG0cKyOp1.hlPfqCBYNwWpyWKlgF1BFbNt6UKsPaO'
        )
      ).toEqual(singleSession);
    });
  });

  describe('getSessionFrom Event id', () => {
    it('shoud return session with specified event id', () => {
      const expected: Event = {
        ...preMadeEvent,
        start: new Date(preMadeEvent.start),
        end: new Date(preMadeEvent.end),
      };
      expect(service.getSessionFrom(expected)).toEqual(singleSession);
    });

    it(`shoud create and return session with specified event id
        if it does not exist`, () => {
      const result = service.getSessionFrom(unregisteredEvent);
      expect(result.event).toEqual(unregisteredEvent);
      expect(result.id).toBeDefined();
      expect(typeof result.id === 'string').toBeTruthy();
      expect(result.id).toMatch(/^\$2[ayb]\$.{56}$/);
      expect(result.active).toEqual(false);
    });
  });
});
