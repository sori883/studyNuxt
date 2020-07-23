export default async function ({ redirect, app }) {
  if (await app.$auth()) { // authプラグイン
    // ログイン中だったらTOPページに遷移する
    redirect('/')
  }
}
