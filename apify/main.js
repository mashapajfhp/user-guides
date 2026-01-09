import { Actor } from 'apify';

await Actor.main(async () => {
  const input = await Actor.getInput();

  console.log('✅ User Guides Actor started');
  console.log('Input received:', input);

  await Actor.setValue('RESULT', {
    status: 'ok',
    message: 'Actor is running successfully',
    receivedInput: input ?? null,
    timestamp: new Date().toISOString(),
  });

  console.log('✅ User Guides Actor finished');
});

