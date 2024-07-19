<template>
  <p class="intro-header">{{ $t('introduction') }}</p>
  
  
  <el-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const dialogVisible = ref(false)

</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    margin: 26px 0 10px;
    padding: 0 20px;
    height: 50px;
    height: 30px;
    font-size: 20px;
  }

  .intro-title {
    text-align: center;
  }

  .intro-header {
    height: 30px;
    font-size: 16px;
    text-align: center;
  }

  .supportList {
    margin: 0 16px;

    .nut-icon {
      color: green;
    }
  }

  .github-icon {
    margin-top: 4px;
    font-size: 24px;
  }

  .btn-wrap {
    margin: 20px;
  }
</style>
