/**
 * Created by hejg on 2017/1/15.
 */

import {Alert, AsyncStorage} from 'react-native';

/**
 * Ajax请求封装
 */
function ajax(url, params, onSuccess, onError, onComplete) {
    var onSuccess = arguments[2] ? arguments[2] : function () {};//成功时
    var onError = arguments[3] ? arguments[3] : function () {};//异常时
    var onComplete = arguments[4] ? arguments[4] : function () {};//完成时
    var AI_APP_PATH = "http://218.205.252.12:10029/aioam/";//办公网环境

    AsyncStorage.getItem("LOGIN_TOKEN", function (error, result) {
        params.loginToken = result || '';
        var paramBody = "";
        for (let key in params) {
            paramBody += ("&" + key + "=" + params[key]);
        }
        paramBody = paramBody.substring(1);
        if (url.indexOf('http://') < 0) {
            url = AI_APP_PATH + url;
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: paramBody
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (!responseJson.state && responseJson.code == "JAVA_EXCEPTION") {
                    Alert.alert('提示', '服务端请求处理发生问题,请联系系统管理员.');
                } else if (!responseJson.state && responseJson.code == "NOT_LOGINED") {
                    Alert.alert('提示', '您尚未登陆或账号在其他终端上登陆导致本设备踢出.');
                    AsyncStorage.removeItem('LOGIN_TOKEN');
                    // wx.navigateBack(getCurrentPages().length + 100);//返回首页
                } else if (!responseJson.state) {
                    Alert.alert('提示', '错误代码:' + responseJson.code);
                } else {
                    onSuccess(responseJson);
                }
            })
            .catch((error) => {
                console.error(error);
                onError();
            });
    })
};

module.exports = {
    ajax: ajax
}