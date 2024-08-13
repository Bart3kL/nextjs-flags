import { precomputeFlags, showHolidayBanner } from '../../flags';

export default async function Page({ params }: { params: { code: string } }) {
  const holidayBanner = await showHolidayBanner(params.code, precomputeFlags);

  return (
    <div>
      {holidayBanner ? (
        <p>Holiday banner is displayed!</p>
      ) : (
        <p>Welcome to our website!</p>
      )}
    </div>
  );
}
