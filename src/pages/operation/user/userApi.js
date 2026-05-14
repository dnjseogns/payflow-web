import axios from '@/common/axios';

export const userApi = {
  reqGetUserList : function(reqParams) {
    return axios.post(
      '/api/user/select',
      {
        ...reqParams
      }
    ).then((res) => {
      return res.data;
    });
  }
}