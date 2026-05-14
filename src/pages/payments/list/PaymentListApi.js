import axios from '@/common/axios';

export const paymentListApi = {
  reqGetPaymentList: function(reqParams) {
    return axios.post(
      '/api/payment/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};