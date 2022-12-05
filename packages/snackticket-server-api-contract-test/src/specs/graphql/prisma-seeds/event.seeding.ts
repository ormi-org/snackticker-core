import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.event.upsert({
    where: { id: 'e91ce6a4-5575-49cf-bd0b-5b16ffeafd5c' },
    update: {},
    create: {
      id: 'e91ce6a4-5575-49cf-bd0b-5b16ffeafd5c',
      name: "Chauncey's birthday",
      start: '2022-12-02T04:00:00+00:00',
      end: '2022-12-02T05:00:00+00:00',
      place: "Chauncey's house",
    },
  });

  await prisma.event.upsert({
    where: { id: '8dd6bf37-7f36-4ce4-bc48-1f782fc36068' },
    update: {},
    create: {
      id: '8dd6bf37-7f36-4ce4-bc48-1f782fc36068',
      name: "Chauncey's party",
      start: new Date().toISOString(),
      end: (() => {
        var date = new Date();
        date.setHours(date.getHours() + 1);
        return date.toISOString();
      })(),
      place: 'Wall street stock exchange',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Successfuly played events seed');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
