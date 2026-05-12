import axios from '@/common/axios';

export const menuApi = {
  reqGetMyMenuList : function(reqParams) {
    return axios.get('/api/menu/my')
    .then((res) => {
        return res.data;
    });
  }
}
