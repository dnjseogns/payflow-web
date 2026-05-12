import axios from '@/common/axios';

export const loginApi = {
  reqPostLogin : function(reqParams) {
    return axios.post(
        '/api/auth/login',
        reqParams
    ).then((res) => {
        return res.data;
    });
  },
  reqPostTokenReissue : function(reqParams) {
    return axios.post(
        '/api/auth/reissue',
        reqParams
    ).then((res) => {
        return res.data;
    });
  }

}
