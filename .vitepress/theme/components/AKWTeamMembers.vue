<template>
    <VPTeamMembers
      :size="size"
      :members="members"
    />
</template>

<script setup>
import contributions from '../../../_data/team';

import {VPTeamMembers} from 'vitepress/theme';

const {members, size} = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  members: {
    type: Object,
    default: () => {
      return contributions() ?? [];
    },
  },
});

</script>