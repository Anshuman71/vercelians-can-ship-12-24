// For an initial starting point, insert your GitHub username between the double quotes here.
// Letter casing doesn't matter.
const yourGithubUsername = "Anshuman71";

// During the workshop, leave the code below as-is.
// But when you're ready, don't be afraid to jump in, make edits, try new things, and make it your own!
import { EmptyState } from "./components/empty-state";
import { NotFound } from "./components/not-found";
import { Profile } from "./components/profile";
import { getGithubProfile } from "./lib/get-github-profile";

const githubToken = process.env.GITHUB_TOKEN ? process.env.GITHUB_TOKEN : false;

const VERCEL_URL = process.env.VERCEL_URL;
const VERCEL_BRANCH_URL = process.env.VERCEL_BRANCH_URL;
const VERCEL_PROJECT_PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default async function Home(url: any) {
  const profileData = await getGithubProfile(yourGithubUsername);
  const geo = url.searchParams;

  console.log({ VERCEL_BRANCH_URL, VERCEL_URL, VERCEL_PROJECT_PRODUCTION_URL });

  if (!profileData) {
    return <EmptyState />;
  }

  if (profileData === "not-found") {
    return <NotFound username={yourGithubUsername} />;
  }

  return <Profile username={yourGithubUsername} geo={geo} />;
}
