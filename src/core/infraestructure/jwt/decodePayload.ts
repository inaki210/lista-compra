export { decodePayload };

function decodePayload<Result>(jwt: string) {
  const [, payload] = jwt.split('.');
  const json = atob(payload);
  return JSON.parse(json) as Result;
}
