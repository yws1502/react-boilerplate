# Front End Template based on Create React App (CRA)

## Deploy
### 1. 로컬(Mac)에서 이미지 빌드
**맥에서 빌드된 도커 이미지는 다른 환경(linux 등)에서 구동되지 않습니다.**

때문에 맥에서 도커 이미지를 빌드해야되는 상황에선 build 명령어 뒤에 **--platform amd64 키워드**를 붙여 도커 이미지를 빌드해야합니다.

```bash
$ docker build <이미지명> . --platform amd64
```

### 2. Jenkins 구동 조건
<특정 브랜치에 push된 경우>

### 3. Docker Container 구동 시 동적 환경변수 설정
> 동적 환경변수 설정을 위해 유니크한 접두어를 사용해야합니다. <br />e8ight 플랫폼 개발팀에선 `WOOSANG_ENV_` 접두어를 활용하고 있습니다.

1. Dockerfile
  - 동적으로 설정하고 싶은 환경변수를 Dockerfile에 아래와 같이 설정합니다.
    ```shell
    # example
    ...
    ENV REACT_APP_<변수명>=WOOSANG_ENV_<변수명>
    ...
    ```
  - 설명
    - 도커 이미지 빌드 시 REACT_APP_<변수명>의 값을 WOOSANG_ENV_<변수명>으로 변경합니다.

2. docker-compose.yml
  - 1번에서 설정한 WOOSANG_ENV_<변수명>을 docker-compose.yml의 environment key 값으로 추가하고, value 값으론 환경변수를 설정합니다.
    ```shell
    # example
    ...
      environment:
        - WOOSANG_ENV_<변수명>=${REACT_APP_<변수명>}
    ...
    ```
  - 설명
    - 컨테이너 구동 시 1번에서 변경된 WOOSANG_ENV_<변수명>의 값은 프로젝트 최상단에 있는 env.sh에 의해 docker-compose.yml에서 설정한 환경변수(프로젝트 최상단 .env)로 변경됩니다.
