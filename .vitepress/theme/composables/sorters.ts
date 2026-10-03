interface Activity {
  commits: number
  add: number
  remove: number
}

interface MemberActivity {
  summary?: Activity
  lastMonthActive?: Activity
}

export const sortMembers = <T extends MemberActivity>(team: T[], filter: string): T[] => {
  const period = filter.includes('month')
    ? 'lastMonthActive'
    : filter.includes('summary') ? 'summary' : undefined

  if (!period) return team

  if (filter.includes('commits')) {
    return team.sort((member1, member2) =>
      (member2[period]?.commits ?? 0) - (member1[period]?.commits ?? 0)
    )
  }
  if (filter.includes('activity')) {
    const activity = (member: T) => (member[period]?.add ?? 0) + (member[period]?.remove ?? 0)
    return team.sort((member1, member2) => activity(member2) - activity(member1))
  }

  return team
}
