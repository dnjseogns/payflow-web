import axios from '@/common/axios';

export const codeApi = {
  reqGetCodeList : function(reqParams) {
    return axios.get('/api/code')
    .then((res) => {
        console.log("codeApi result",res);
        return res.data;
    });
  }
}
