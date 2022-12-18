<template>
  <div class="cofee">
    <article>
      <p style="font-size: 1.2em;">
        Made with ❤️ by <a target="_blank" href="https://twitter.com/MauriceConrad">Maurice Conrad</a>
        <br />
        Project on <a target="_blank" href="https://twitter.com/MauriceConrad">GitHub</a>
      </p>
      <p>
        <h2>Send me a tip</h2>
        <a href="https://www.buymeacoffee.com/mauriceconrad" target="_blank">
          <img class="btn-image" src="/bmc-button.png" />
        </a>
        <article>
          <span>or via bitcoin to </span>
          <br />
          <code>
            bc1qp07jsz5d9enh93z4xvasxydt9p4zu7n06c8s2537vv9f8t84pudst9tf55
          </code>
        </article>
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<style scoped lang="scss">
article {
  text-align: center;
  padding: 0 20px;
  a {
    color: inherit;
  }
  h2 {

  }
  
}
.btn-image {
  height: 40px;
}
code {
  padding: 2px 5px;
  background-color: rgb(45, 45, 45);
  margin-top: 5px;
  display: inline-block;
  word-wrap: break-word;
  max-width: calc(100vw - 90px);
}
</style>