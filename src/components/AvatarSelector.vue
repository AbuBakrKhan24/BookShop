<template>
  <div class="avatar-selector">
    <div>
      <input type="file" @change="handleAvatarChange" :accept="formatsString" />
      <p class="avatar-selector-instructions">
        {{ formatsString }} files with a size less than {{ size }}KB
      </p>
    </div>
    <Avatar :value="value" />
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
