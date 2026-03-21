import { GitHubCalendar } from "react-github-calendar";

export function GithubActivity() {
  return (
    <section className="text-center m-4 p-4">
      <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        GitHub Activity
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      <GitHubCalendar className="mx-auto my-4" username="JCLthatlittlerat" />
    </section>
  );
}
