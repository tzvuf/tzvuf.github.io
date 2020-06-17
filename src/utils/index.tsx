import { TYPE_Q_FUN } from '@/type/global';
// 验证数组
export function isArray(obj: any) {
  // return obj instanceof Array;
  return toString.call(obj) === '[object Array]';
}

/** 生成指定的随机数字 */
export function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

/** 从数组中随机取一位数字 */
export function getRandomNumberForArr(arr: number[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
/** 从数字中随机取一位数字 */
export function getRandomNumberForNumber(n: number) {
  const arr = new Array(n).fill('1');
  const index = Math.floor(Math.random() * arr.length);
  return index;
}

/** 随机取一个组件 */
export function getRandomComponent(components: TYPE_Q_FUN[]) {
  const idx = getRandomNumberForArr(components.map((v, idx) => idx));
  return components[idx];
}

/** 客户端判断 */
export const clientType = () => {
  let sUserAgent = navigator.userAgent.toLowerCase() as any;
  let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
  let bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
  let bIsAndroid = sUserAgent.match(/android/i) == 'android';
  let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'mobile';
  } else {
    return 'pc';
  }
};

/** 打印 */
export const handlePrint = () => {
  // 打印页面预览
  if (clientType() === 'pc') {
    window.print();
  } else {
    alert('使用电脑进行打印');
  }
};
