import { unstable_flag as flag } from '@vercel/flags/next';

export const showHolidayBanner = flag<boolean>({
  key: 'holiday-banner',
  decide: () => false,
  origin: 'https://example.com/flags/holiday-banner/',
  description: 'Show holiday banner',
  defaultValue: false,
  options: [
    { value: false, label: 'Hide' },
    { value: true, label: 'Show' },
  ],
});

export const precomputeFlags = [showHolidayBanner] as const;
