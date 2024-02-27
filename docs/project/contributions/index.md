---
layout: page
title: Участники
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

import { contributions } from '../../../_data/team'

</script>

<VPTeamPage style="margin-top:0">
  <VPTeamPageTitle>
    <template #title>
      {{ $frontmatter.title }}
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="contributions"
  />
</VPTeamPage>