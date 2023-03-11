import MountainLogo from '/MountainLogo.png';

export const sampleEvent = {
  eventId: '12345',
  eventTitle: 'RainFocus Summit',
  date: new Date('December 15, 2023'),
  location: 'Lehi, Utah',
  img: MountainLogo,
  nav: {
    Attendees: {
      title: 'attendee',
      step1: {
        general: {
          title: 'General',
          description: 'General settings description goes right here.',
        },
        settings: [
          { title: 'Title', description: 'sample little bit of text' },
          {
            title: 'Title2',
            description: '2 sample more text2 sample more text2 sample more text2 sample more text',
          },
          { title: 'Title3', description: '3 another sample description for step 1' },
          {
            title: 'Title4',
            description:
              '4 sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text sample with a lot of text ',
          },
        ],
      },
      step2: [
        {
          title: '1 Attendee Registration',
          description: '1 registration workflow information goes here',
        },
        {
          title: '2 Attendee Registration',
          description: '2 registration workflow information goes here',
        },
        {
          title: '3 Attendee Registration',
          description: '3 registration workflow information goes here',
        },
        {
          title: '4 Attendee Registration',
          description: '4 registration workflow information goes here',
        },
      ],
      step3: {
        title: 'Attendee Portal',
        description: 'attendee portal description goes right here',
      },
    },
    Guide: {
      title: 'guide',
    },
  },
};
