"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const student_routes_1 = __importDefault(require("./routes/student-routes"));
const json_student_repository_1 = __importDefault(require("./persistence/json-student-repository"));

class App {
    static buildUri(version, path) {
        return `/api/${version}/${path}`;
    }

    static createStudentRouter() {
        const studentRepository = new json_student_repository_1.default();
        return new student_routes_1.default(studentRepository).router;
    }

    constructor() {
        this.STUDENTS_BASE_URL = App.buildUri('v1', 'students');
        this.server = express_1.default();
        this.addUses();
    }

    addUses() {
        const studentRouter = App.createStudentRouter();
        this.server.use(morgan_1.default('tiny'));
        this.server.use(body_parser_1.default.json());
        this.server.use(this.STUDENTS_BASE_URL, studentRouter);
    }
}

exports.default = new App().server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXRjaFxcT25lRHJpdmVcXEJ1cmVhdVxcbm9kZV90czJcXHNyY1xcQXBwLnRzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFhdGNoXFxPbmVEcml2ZVxcQnVyZWF1XFxub2RlX3RzMlxcc3JjXFxBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBaUQ7QUFDakQsb0RBQTRCO0FBQzVCLDhEQUFxQztBQUNyQyw2RUFBb0Q7QUFDcEQsb0dBQTBFO0FBRzFFO0lBR0k7UUFETyxzQkFBaUIsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFPLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBZSxFQUFFLElBQVk7UUFDakQsT0FBTyxRQUFRLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBRTFELENBQUM7SUFFTyxNQUFNLENBQUMsbUJBQW1CO1FBQzlCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBcUIsRUFBRSxDQUFDO1FBQ3RELE9BQU8sSUFBSSx3QkFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHtFeHByZXNzLCBSb3V0ZXJ9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgU3R1ZGVudFJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvc3R1ZGVudC1yb3V0ZXNcIjtcclxuaW1wb3J0IEpzb25TdHVkZW50UmVwb3NpdG9yeSBmcm9tIFwiLi9wZXJzaXN0ZW5jZS9qc29uLXN0dWRlbnQtcmVwb3NpdG9yeVwiO1xyXG5cclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwdWJsaWMgc2VydmVyOiBFeHByZXNzO1xyXG4gICAgcHVibGljIFNUVURFTlRTX0JBU0VfVVJMID0gQXBwLmJ1aWxkVXJpKCd2MScsICdzdHVkZW50cycpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBleHByZXNzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRVc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRVcmkodmVyc2lvbjogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgL2FwaS8ke3ZlcnNpb259LyR7cGF0aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudFJvdXRlciA9IEFwcC5jcmVhdGVTdHVkZW50Um91dGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIudXNlKG1vcmdhbigndGlueScpKTtcclxuICAgICAgICB0aGlzLnNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyLnVzZSh0aGlzLlNUVURFTlRTX0JBU0VfVVJMLCBzdHVkZW50Um91dGVyKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVTdHVkZW50Um91dGVyKCk6IFJvdXRlciB7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudFJlcG9zaXRvcnkgPSBuZXcgSnNvblN0dWRlbnRSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHVkZW50Um91dGVyKHN0dWRlbnRSZXBvc2l0b3J5KS5yb3V0ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5zZXJ2ZXI7Il19