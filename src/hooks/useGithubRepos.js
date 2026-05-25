import { useEffect, useState } from 'react'

export function useGithubRepos(username, limit = 3) {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(Boolean(username))
  const [error, setError] = useState('')

  useEffect(() => {
    if (!username) {
      return undefined
    }

    const controller = new AbortController()

    async function loadRepos() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        )

        if (!response.ok) {
          throw new Error('Unable to fetch GitHub repositories.')
        }

        const data = await response.json()
        const mappedRepos = data
          .filter((repo) => !repo.fork)
          .slice(0, limit)
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description:
              repo.description ||
              'Repository synced from GitHub. Add a custom description in your repo README for stronger presentation.',
            techStack: [repo.language || 'Open Source', `Stars ${repo.stargazers_count}`],
            githubLink: repo.html_url,
            liveLink: repo.homepage || '',
            image: '/favicon.svg',
            eyebrow: 'GitHub Repository',
          }))

        setRepos(mappedRepos)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
          setRepos([])
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadRepos()

    return () => controller.abort()
  }, [limit, username])

  return { repos, isLoading, error }
}