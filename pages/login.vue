<template>
  <div class="flex justify-center">
    <div
      class="flex items-center flex-col h-48 mt-20 w-4/5 p-4 bg-white shadow rounded"
    >
      <div class="w-full border-b pb-2 mb-10">
        <p class="text-center">ログイン</p>
      </div>
      <form class="w-full" @submit.prevent="onSubmit">
        <button
          type="submit"
          class="w-full bg-google py-3 px-10 text-white rounded focus:outline-none focus:shadow-outline border"
        >
          Google でログイン
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // middleware = ページ表示前の処理
  middleware: ['checkLogin'],
  // FirebaseのGoogleログイン機能を呼ぶ
  methods: {
    onSubmit() {
      const provider = new this.$firebase.auth.GoogleAuthProvider() // firebaseのgoogleログイン用プロバイダーを作成
      this.$fireAuth.signInWithRedirect(provider)
    }
  }
}
</script>
