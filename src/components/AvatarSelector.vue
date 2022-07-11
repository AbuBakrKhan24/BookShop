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

<script>
import _ from "lodash";
import Avatar from "./Avatar.vue";
export default {
  name: "AvatarSelector",
  props: {
    value: Blob,
    formats: Array,
    size: Number,
  },
  computed: {
    formatsString: {
      get() {
        return this.formats ? _.join(this.formats, ", ") : "*";
      },
    },
  },
  components: {
    Avatar,
  },
  methods: {
    handleAvatarChange(e) {
      // URL.revokeObjectURL(this.value);
      const file = e.target.files[0];
      if (file && this.beforeAvatarUpload(file)) {
        this.$emit("input", file);
      } else {
        this.$emit("input", null);
      }
    },
    beforeAvatarUpload(file) {
      const isformatValid =
        _.findIndex(this.formats, (f) => f === file.type) >= 0;
      const isSizeValid = file.size / 1024 < this.size;
      if (!isformatValid) {
        this.$message.error("Avatar picture has invalid format!");
      }
      if (!isSizeValid) {
        this.$message.error("Avatar picture has invalid size!");
      }
      return isformatValid && isSizeValid;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-selector {
  align-items: center;
  display: flex;
  .avatar-instructions {
    font-style: italic;
    margin: 10px;
  }
}
</style>
