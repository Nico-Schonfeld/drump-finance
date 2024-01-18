export const RegisterServer = async (newUser: unknown) => {
  if (!newUser) return;

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await res.json();
  /* 
  console.log(res);
  console.log(data);
 */

  if (res.ok) return res;
};
