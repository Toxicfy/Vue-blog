// 初始化api
import AV from 'leancloud-storage'

const appId = 'VSxdEuAx8SfjriQMvOUl7Ler-gzGzoHsz';
const appKey = 'AyiivxXcQivUhY0fPdLDmtEC';
AV.init({
  appId,
  appKey
});

export default {
  SDK: AV
}
