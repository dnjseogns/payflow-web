import axios from '@/common/axios';

export const merchantApi = {

  reqGetMerchantList: function() {

    return axios.get(
      '/api/merchant/select'
    ).then((res) => res.data);
  }

};