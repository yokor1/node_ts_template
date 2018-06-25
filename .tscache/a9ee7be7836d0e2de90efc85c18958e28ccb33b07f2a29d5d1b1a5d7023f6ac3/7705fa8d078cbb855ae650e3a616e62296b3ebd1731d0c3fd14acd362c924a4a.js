"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const App_1 = __importDefault(require("./App"));
const port = process.env.PORT || 3000;
App_1.default.listen(port, (err) = > {
    if(err)
    return console.log(err);
else
return console.log(`server is listening on ${port}`);
})
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXRjaFxcT25lRHJpdmVcXEJ1cmVhdVxcbm9kZV90czJcXHNyY1xcaW5kZXgudHMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWF0Y2hcXE9uZURyaXZlXFxCdXJlYXVcXG5vZGVfdHMyXFxzcmNcXGluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXVCO0FBRXZCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUV0QyxhQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQzVCLElBQUksR0FBRztRQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDNUIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzdELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tICcuL0FwcCdcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsIChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcclxuICAgIGVsc2UgcmV0dXJuIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uICR7cG9ydH1gKVxyXG59KTsiXX0=