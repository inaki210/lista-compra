import { post } from '$core/infraestructure/apiClient';

export { startCall };

function startCall(
  operatorCode: string,
  userPhone: string,
  propagatePhone: string,
) {
  return post<string>({
    path: `callmeback/${operatorCode}/${userPhone}/${propagatePhone}`,
  });
}
