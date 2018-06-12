export async function Login() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch('http://192.168.0.104:8080/user/login', {//eslint-disable-line
      method: 'POST',
      body: JSON.stringify({
        specialities: this.state.specialities,
        name: this.state.name,
        pass: this.state.pass,
      }),
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
