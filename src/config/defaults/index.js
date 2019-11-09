/**
 * CONFIGURATION DEFAULTS
 * ----------------------------------------
 * MODIFICATION WARNING
 * ----------------------------------------
 * This script sets all the configuration defaults.
 * Do not modify if you are not sure what is going on
 * it will break everything.
 */

module.exports = function(conf) {
    Object.entries(conf).forEach(
        l1Conf=>{
            // console.log('l1Conf: ', l1Conf);
            l1ConfDesc = l1Conf[0];
            l1ConfSet = l1Conf[1]
            
            // console.log('l1ConfDesc: ', l1ConfDesc);
            // console.log('l1ConfSet: ', l1ConfSet);
            switch(l1ConfDesc){
                case 'layout_config':handleLayoutConfig(l1ConfSet);
            }
        });

        function handleLayoutConfig(layoutConf){
            // console.log('handleLayoutConfig: ', layoutConf);
            layoutConf.main.classes.errorStackStyle = {display: 'none'}            
        }

        return conf
}
