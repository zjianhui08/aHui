<template>
  <div class="my">
      <div class="userInfo clear">
        <div class="cancel" @click="cancel">
          <p href="" class="cancel">注销账号</p>
        </div>
        
        <div class="userInfos">
          <div class="userImg">
            <img src="data:image/png;base64,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" alt="">
          </div>
          <!--  -->
          <div class="userName">{{$store.state.userName}}</div>
        </div>
      </div>
      <div class="BacBox">
        <div class="myOrdForm">
          <div class="fromTitle">
            <p>我的订单</p>
            <span>全部订单
              <i class="iconfont icon-dayuhao-copy-copy" ></i>
            </span>
          </div>
          <div class="shopStatus">
            <ul>
              <li>
                <div class="imgBox">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACHklEQVRoQ+2aMU/CQBTH/w+Im4MkNiSuppj6BTCUhOrs7CfQ0VUnBiaY3XB29wMYYUATNhcxdNVBwUA0LprQZ1opAYQQmmLb824i6fXlfu//77274wiCNxKcDxIw6gpLBaWCIc/A/7Gopmkr/X6/yMxHANZCLsys4fWIqBKPxwvNZvPL7jRUMJ1Ol5j5JKJgY8MmonKr1TodA1RVtRth5SZ16ZmmmZwEZLeXaZqR/DZVVf3FMASZ9jBqdpWA0qIh96y0qLSotGiwGQjlN/hq5Pb64IMYkGNgA8CqX2ki4DGwQv+W39n8ovg5A3m/gKbFCQSwvZfNkUWXDDjrxWW2PwccKNcYgfsEuGKBLmKcuFdqtQ8/gNuG7qxL/xywY+hV15YEPDFb+0rt9s4PqNEYgQDaE4oFvhoM5BNsZZYBZ8cPBPDF0CsEHP4A8plSvTm2f91r2sp6KlmEBfs0AYih0nnuFrYHu3Iv6gYC2DH0Bwa27AFbQCZVrTecbO/qJTDGTxMIZeW67uzKvbRAANuG/j6sc5xYdSeUdl7vgibOgRg9pVb3PMtKQC+2mPdOx8g+MEhciwo/yQhfJmwLC13obUDhl2pO3RN5se3OtEJvl0bLibAb3nk108vzUB5ZeAGZ9Y4EdDMj/13y01c+xpIWlRb10U7LCPXvLSr2JQThr5EIfxFoGR99GGJG8j7MIomTgItkK4x9pYJhVGWRMX0DDt7bPOuQI6UAAAAASUVORK5CYII=" alt="">
                </div>
                <p>待付款</p>
              </li>
              <li>
                <div  class="imgBox">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAE9UlEQVRoQ+1aXUxbZRh+33MQwwY2/LQFdLuRfiVdXMJmYrQF6xgkGq80JPPCBGcyb9REs6gxCjiX+BOiF/PGJQvqjSZTY2JMDPuhtkWzi226JYR+hZvB2Gj5FYTIes5rvnJKSmnLObSEFs93B9/7vO/7fM/znXO+c4qwywfucn5gEix2hU0FTQULfAWyWrSxsZGpqvoTADQC6L8g2WQJfqytMUT9ubtTEFFUIxgCgGFEPBYKhW5kAmYjKDHGrgPAQSNVRezRsvuhp8piCNYzMw8Xl/81hNGC/+KcHwKAtKuTkaDT6TxOROe2UvENSwU8X15mCPrD4jJ8Pr9gCJMU3Mk5/zodOC3B+vr6PeXl5WEAqBcgIno/HA6f1ls94nVfA8QmES+r1F792+CFdNjpJ91tioT98Tmi6zbfoFBC12CMdQNAjxY8trS05BwfH19OBaclyBjrAoAPtODbi4uLbGJiYklP5ajbXQGlOEMAJQCg4ApVWgcH00ojYqkUZ8U6IEAMVqgqU2xqbbvdvtdisQgR6rS5dznnH21K0OVy1cZiMQEsF8GIeDwUCvXpISdipryeoyrCqmI6VElWWyJoq/EFL+qt5XA4TiDil1r8PAA0cM6nkvEbFGSMCcAJPRs4XSNRr6ebULMO4he2y4HXsjUcOdJ8BohejS8mQY/VF0w4Rw9PmTEmrqAuLfgM5/z1jAQbGhoOSJL0J6zaS+y99nA4nHb/ZKoe8Xr6AaFttWF8weoLfJet06i3+RghfbuqOFyw+YLtepglYhwOx7OI+LP294qiKAdGR0dHEvPrFGSM/QIAz2iTv3LOnzZSjDo65OjUHbGnKgROVqT91X7/WLYc0y0t+xRZvaXFLFhr6irx/HnFSF2HwzGAiF5tS30fCoU6NhBkjLUCQNz/RKTIstw0PDx800ihSEtLE8jqNc1uY1ZfcL8efNTruUUI++KxinTI5veL+6/u4XQ6HyWiKwAgifZVVXWPjIz8Ee8jkYUx9g0AvKg7a5rA4IO2XOBrWM/tSK55znLOX0klOAcAxh4/UtooFIJENBcOhytTCYpnu5xGoRAUJDjncXcmW3SNYGLSKNvIU561HLaBoKGzZi7YpG22gYNJ0IiKuaiQC9ZUUKwAY8zcg5vZNReb5YI1LWpadDNvavO52CwXrGlR06J5suh0a3P85F19KTCUmrKoLTrZ+phdUu8TryJe1oidU6V73fZLVyYTRIuS4MThw3tKLGVvAsFbiVN+knILgPBpbH75s/qrV5eKjqBE1EkonSagh7I5HAHHkdT3VMSvEnFGTyI7chXdQIrgpixJJ8X/FVXtBYRHMhEvKoIIMEFEXVbfYB9q3w8IQIp63S8h4inS3p4nky0WgouI0KuU/N1b23/jn3Rq3W0/uFeOPXCSCISy8RfNYhQywSgAVCJiH9yDLmsgcEfPHSba3FxHJfQhAHQC4JxtIGDs25tWJN2JKK8n+skjTzyMsRLJ5veLV/+GR8T7eANJSPbLv48aBmc48uWV4Faayidm2xXMZ7NbyWUSTKzaVl8bbmXV84kxFTQVzKeftiHX/96iM+IpZBsWdidSznLOq0ThtRu90+n8mIje3olu8l0TET8JhULvrCPocrlKFUU5RUTiBwjFquQsIp6VZblraGhoZR3BfK9ioeQz9A2vUJo20odJ0MhqFWLsrlfwP1vX6lcPhCXbAAAAAElFTkSuQmCC" alt="">
                </div>
                <p>待发货</p>
              </li>
              <li>
                <div class="imgBox">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADfUlEQVRoQ+2aTWgTURDH/5OkEQRBqxEVhFKaaRsVCh5ULNLYk6KIQg8KXgU/UDxZPCgUBL0IIlX06EFBD4r25MHW2noQRBStzUsLRUWkqe1V025GXruVNLbd7OYFN2HfLZt5b+Y3/9nd97GEKm9U5XwIACtd4UDBQEGfZyAoUTcCJRKJqGVZXSJyAsAaN30N2k4R0d1wOHxpaGgoa1TBxsbGqyJywWCwnociomupVKrTKCAzT/5H5QqTMaWUqjUNKPNelFJGxy5WSmZeEIPRIAoHLzYok3YBYCnZDBQsJXtF9g1KtMhELWpWsSXKzMcB3HMDXzGvifr6+ngkEnkLYFXVAeq55fT09Gsi2u4GTttWhILMfB3AeRvuF4CdSqn3S8FW1D3IzPsB9ABz+zYicjadTt9cTsmKAWxubt5oWZZWKqaBiOhpKpU65FSmlQIYYubnANptoG+hUKhleHj4Z1UAMvNFAFfssrREpH1kZOSlE5z+3/cKNjU17crlchqmxgbqUkpdLgbO94B1dXWro9HoOwB1NtArpVQSgFUVgMz8EECHDTNpWVbL6Ojo12LhfK1gPB4/QUR3bBi9Ij6ilHriBs63gA0NDVuI6A0RrbSBupVSZ9zC+RaQmT8A2GYDfchmszvGxsb0rMV18+VTND8oEUmk0+nPrsnsDr4HLHWCHAB6LQ0X/f7ZsjCZdZNjuWBaYBoAes2cn18TxrbbK7JEx9t2txLRKQB7ckAsBGQA9IvIrfV9gwP5ipsCdOOzsOKKvgelrS2SoZkbBJwUe1WfPxjpRT5wOyaRc9TXN2OiRL349Aw4nmztBqCVc2q31vcOnDYB6MWnJ0C7RPrnlSNCT0iks3bdVHpyYk08R3RVBAf04LNKiuzR5VpKiXr16Qkwk2y9L8DRWQBCT+zFwMHCgTJ7W5/lQT6I9Q4cKwXQq09XgPPGjzesRSwcnv0Zhmxd2zv4qXCgn8ndWyzQR309Y1k4/MNxy2bZUi+Dz7kTXmb+AmBzvvfeTTHU0NzZaGzd5Ap6NJQtjE46EtHMRO1vfX1aBMnv+uHqvZn2+feMnpn3AdCL3b+QZcimI7lBn85fWZi6Hxyp8gzK5XPRM3pTTzQ3gOXyueRHCCbeSW4AtW05fC4JaGJW4RawHD4dPyMpZV7oFnDe3qRPR0CvQfqlXwDoFyW8xlH1Cv4BilkFZgnwDeQAAAAASUVORK5CYII=" alt="">
                </div>
                <p>待收货</p>
              </li>
              <li>
                <div class="imgBox">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACVUlEQVRoQ+1aMYsTQRT+nrucGCz0hKvSXMLOYPIDbFTQ+rC45iwsrOy0VCsLK6/wByjY2YoiHtrZWF6hCAszhBSiCBYenNqYzY4M7IW7XCI3w+zebnjpNnnvzffN983MknmEBf/QgvMDE2y6wqwgK1jzGZhYtNfrLY3H44fGmFsAztYc9zx4O0T0NIqiB2ma/rVBE4JSykfGmHsNJXYANhFtKqXuHyAohPjZYOWmddnRWi9PEzR7UVrrRu6uQohDHCZEZv3YNLsyQbZozT3LFmWLskWPdwZ4DfIanOPAH1cuTl6RQpp05f0Hp1fG0izKBD1lrY2CnviDp5Vm0eBIPQsyQT4mPK1TVRpb1NeifA56erQ25+DCK+gpUPA03mR8N5ngUngWZAVZQU/rVJXGFmWLVuU1z3HYootu0dBX2FtxHF9P0/T3/xxnmx+yLHsG4IanM2elHb7CLqkJ4SOANa31t1ko+v3+8mg0egngckBymNmEUGIbydeC5Kf9JDqdThLH8RsAIiC5+W0kAQdBkiQ3iegJgKWi7i8AG1rrt/ZZCHEJgFXunH02xuREdFdr/TgkDlvL6a9xl8GllFfzPH9BRGeKvIyI7gDYNcbYNXey+P6PXX9a61cu9Y8aWxpBCyBJkvNEtAVgdR8ge4+xN+53IrqmlNo+KmDXuFIJWjDdbncliqLXAC5MgfucZdnacDj84graJb50ghZMu90+1Wq1ngNYL8C9y/N8YzAY7LqA9YmthGAB7ISUchPAaaXUbQCZD2DXnCoJumILEs8Eg0zjMRb5B8prsEiUEHecAAAAAElFTkSuQmCC" alt="">
                </div>
                <p>待评价</p>
              </li>
              <li>
                <div class="imgBox">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAC8ElEQVRoQ+2aPYgTQRTH/7N7SkCCicrFKl1mMYVoqcjhR+zU6kAQa0FFCy0UCwsrrxG9wkKws/KjkGsED5VDtJCgIMTsbkhhIcehFxArLzsjE5KwXnazm01mYuJsmffmzf+3773J7O4QTPlFZPHlcrltmUxmu23b32TNESeuLMAZSulzAHs55ydd1/0UR4wMHymAlNJFAJfagn8ZhnGmWq0uyQCIiikF0LIsizG2RAgpCAGccw/AVdd170UJGrVdCqAQmc/ns6lU6gmAYz7R9x3HuQxAACu5pAG21YteFFm74KN5wRg7XavVfqoglA3YYqCUXgRwF8BMG+pzs9k8Ua/Xv8qGVAIoIAqFQokQ8hhAtg21CuCU4zgfZEJ2AYvF4lbP825xzs/5RMicuxXbMIz5arX6LGwiy7LWOeedmxKlp0EIeWCa5s1KpfJbOHcBLcu6zTm/FhVBgp0RQm7Ytr0QFHtAwFYIQsiCbdvX/wKklK6rzFwAzMN0On2+XC5v+G1JAAE0HMfZsRmQdwI7jqOsN0dZEZTSHoYuSJBxlJOriKUBdYmqqLMh5lBeohwwCMCiNMf1i4qjFPB7aW4P99hT7nlnZ1fefwwTtzZ3YD8xzUfENOZ3La98iYLoZ1cGKOCYx14B2A3wH/DY8SBIAQfTeAmQnQBWDdM4OgykMsDG4YP7NghZbgsXT4Q9kJvgWj5bOC9l37xL/PSvDFCUURBAJ5P9bBNRoh2RQSAGyBUGfqdfdpNCKs1gOKRffnh/JoEcC2BwuYpfRwsnIioDXDtyqLvpHTQTs6/fJt7oa8BR7UWnPoOhuxZf6Q5TimHxlZWoBgSgMzjo8qv/JgJe2CS4ia0hU7+KTj2gXkX1Kpqs+/Uf/aj2oroHp7UHk3VW/FFj78H4UpN5akDZi0yyvMQf9d9ncNyfsOOnKtqz9xP2GA8hRMsd0CPwEMK4jpEMqD3KPfwYSdTISbUnfsk6KcAacFIyFaZTZ1Bn8B+/A38ALUpFV2PVnm0AAAAASUVORK5CYII=" alt="">
                </div>
                <p>退款/售后</p>
              </li>

            </ul>
          </div>
        </div>
        <div class="list">
          <ul>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAUVBMVEUAAADqQTzqQTwmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJibqQTwmJiYmJiYmJiYmJiYmJiYmJibqQTwmJiYmJiYmJibqQTzCHZ9xAAAAGXRSTlMA1BXwg0Hmsgz+9ntYVkkOGRfn0M+zkRgLRDJX8wAAAMhJREFUOMvN09kOgyAQBVBlUepWtXW5/P+HFhE6ZtrIU1Pvy6g5YQiD2SXTFThN0TnkTEI5BJx3An6H7qGcoTkXWxH5/IFUH9fJ7aaEK3GtRQUE2YZPYlPC0z2thEdGT7g1B3UwzQ2lNvtzDTmQIjNI1LS5EiqLytpoMoUpo2g8fLXv+Ncn9AEZVN9QBcNQTACEeDtC1I5vnLdTKMnUkAtD7AhWXdJhUjs6zJXGwhCNhQbMEKVXdFU4St/M/6MCiYwOdWPyN79iXg0IHhwyXXrbAAAAAElFTkSuQmCC" alt=""></div>
                <p>我的优惠券</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAPFBMVEUAAAAmJiYmJiYmJib///8mJibqQTz+9vbvgX762tn3xsXympjtZGD1sK/rU0/zpqT87e3uc3D75OP2u7r6jdVUAAAABHRSTlMA5kpJG2qUMwAAAKdJREFUOMvNkUsOhSAMRUWf/fAR0f3v9TUNjgjtyMQzIYGT0t4un2QLe+cn7ANhE0kcSxJLJHlU5BzR+7elixkd6c4g5IKGlKBz4FRiKRKZS4Y6r5SeCtHoiYD86UgqudIN0CI6Eh4aQIpo5XRRTyDaiXNR8fR2hwmg+gvOQL5EhpQa6xmN74rOX0ozGteGjQgezkqitHoOYU54QQq7QxBpDY6zLl/kD7dlEnB7c+k8AAAAAElFTkSuQmCC" alt=""></div>
                <p>S码通道</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAsVBMVEUAAAAmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYnJydEREQmJiYmJiYmJiYmJiaSkpImJiYmJiYmJiZHR0csLCwmJiYmJiYmJiYmJiYmJiZ5eXl3d3f///8mJibqQTzq6urPz8/MzMzJyclbW1tNTU2UlJT6+vrvbmqnp6cuLi4sLCz7+/umpqY1NTU0NDSqqqqoqKiTk5O8LZLMAAAAJXRSTlMA6gSAD/qSWMZM56+V7LcnFgnN+fXZvaGCUD8z/dWkmXJtaE5DPpLNjwAAAV5JREFUOMutlNl6gjAQRg1hB/elVbu3/CK7S7Xt+z9YA0ZGBD5vPDcJcD4mmcykcwcGNP0aOc3OOx5UOX0cY1ZMFEs3bU2zTd1SiheLCUaDk/OE16EYVc5Q0uXFL5Y2RvnkcwyePxs2ECehn6Z+mMSAbRSLmuJFDM/Q80guEAVeSRABbh6zP4EI6PQU4TjYbbwKmx2c3Fp8dCQ6jmvvivURbucCA1tyyNrCIEdl+PYa+AVTS4kjKj9kmUdE4GdHYaB9rVYeEYApUrIQexWJiGGVW/trkxLoUjIRtkkhTCkx+G2SDyYlDWmblEJrlCQZSfVwGUkUjhZONC1cR9LiUAoomUQ9mUoXQbNDx0IHTNAB3yyVHyqVG0VHuDjUy/dQKd+2RpgpFWnYQ72lpuBXDntjp+bc70/NyYy5Bl5x7L5o8+5VmxuXlpE78sJgmsbkhVFYyzJPXDiNzMXVc0/+AVmXamt+0miWAAAAAElFTkSuQmCC" alt=""></div>
                <p>我的预售</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAhFBMVEUAAAAmJiYmJibqQTzqQTwmJibqQTzqQTzqQTzrQj3qQTzqQTzqQTzqQT3qQTzqQTzqQTzqQj3rRD/rREDqQTzqQTzsUU3///8mJibqQTz++fn5y8r60M/0mpfsUU33urjrRkL+9PT97Ov84+P72tr4vrz2sK71p6X0oJ3xfXrvcW7sV1JnGnMbAAAAF3RSTlMA5kkG9ufa1bp18MzDk4Z7ZFs8GQO4c3YkMWgAAADXSURBVDjL7ZNZrsIwDEULTSllnt5rTtOJedr//lCSSpBKRPCHBPcnvvKJLVty8I5Ws9FAxJOldctJLAaj2cplwj5GYq7dXFj3FzrQlLJaZ/kZ/oMggXOerauSqQP1yFOtAywWcDAmJ3YgyFKjguGQwsYZolVJNYkrXJsPip4DJZQ7mznC0Ua7kqQ9XV1sdGoLW/1uipp+2NrBGLic9krVVGp/ugDjB6bbkR51ugbSjI8ykJSpR1J+LPRkugaRkd1T5IHsnmxDX7Mf9B2Q516i++VFnqt7VTeqzFOSFmNy2wAAAABJRU5ErkJggg==" alt=""></div>
                <p>我的礼物</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABGlBMVEUAAAAmJiYmJiYmJiYmJiYmJiYmJibqQTwmJibqQTwmJiYmJibqQTwmJiYmJiYmJiYmJiYmJiYmJia4OTbqQTzqQTzqQTzqQTwmJibqQTzqQTwmJiYmJiYmJibqQTzqQTzqQTzqQTwmJiYmJiYmJiYmJiYmJiYmJib///8mJibqQTz9/f3d3d1sbGwyMjLm5uY6Ojo0NDQsLCzq6urNzc2SkpJlZWX6+vq9vb18fHwwMDAqKir39/f09PTw8PDPz8+KioqHh4eAgIBzc3P//Pzz8/P98fDr6+v84eDf39/5ycjCwsKsrKz2rat2dnbwd3PtX1vV1dXR0dG2traXl5fzk5Dzko+Ojo6Dg4NeXl7sT0tLS0vrTkpCQkIVc5SpAAAAKHRSTlMA+vbDvSsH6JhOQDcS6OTXVkg8BPvv5trKu5aUgH5yWjgsD/CNgSQc87RSHAAAAa9JREFUOMt90+d6gjAUBmAQbd127z3zRUHEotZZta272r3v/zZqJUIi6veLA++Tk4UkxLfnjchyxLvnk2ZlRYEdZWUqWfADqVoumS0lcrUU4F9wmxMFhlkiLCXTgHLiGkeBXiFcKjqUybF2oSeJkKSOXdGEULgiE7kqICQgL6rElSq8wv5AK7tRWQO/X/uosw8tVdPUFiuusS90e7ZeJ1IAkEpYVU7oFwVbmopMOp2ByhaIKIc8yFqvNaQJSSNvVVl4OCTjjkONMSoKKIYnu10jabd7RIxDftxMm7gJP4eC0O+YUvN5lZmijqDERWFDCXnBlnh2cqEyaRIGJm7eOX7Loil+40wSs7qFzyxv4hnEXHfzMop6nEMfiFxIrvhOce0oE56QNCVBj6NMyMvS1Czb6h3ykvv70SFTD//qhpnDI96E12nY6jhU8SozYboe5tAO7bPLr6Feg5Gzqj7dcczxGm0SW8HosKJJ145ttE3fnB/JKHTs4pVuj02A/twTO92u83z/RQPsRDZpj8xIj26ujtABHdzOQrcDejBCi7RNZqZNFxmaF4YCG/PMxnDmf7HShgbEjpjvAAAAAElFTkSuQmCC" alt=""></div>
                <p >地址管理</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAALVBMVEUAAADqQTzqQTzqQTzqQTwmJiYmJiYmJiYmJiYmJibqQTwmJib////0oJ31oJ6bM3u+AAAAC3RSTlMA/lblT+fjSVAQStX4GVEAAAChSURBVCjPvdIxDoJAEIXhVSAaqQZbTeAGGi+wR7D3Eh7BI3gUKpq9wmhCDwU3IZkM8zItBa/88u9WE9bv8Eqy7hvyRxQqklFDlVDZLv2eRqo9NVfuK5BEA/8oCiFi7m9CiJgnJUR/e4jIvkdUgxApITJCZITo+FHKLSpbpWyJQLuLRo4kciSRJ41AGRFJBDrd6RwdYZtQkdyeeiZY9w6rNwOZH3yXiYUYmQAAAABJRU5ErkJggg==" alt=""></div>
                <p >意见反馈</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
            <li>
              <div>
                <div class="imgLog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAqFBMVEUAAAAmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib///8mJibqQTzy8vL7+/vu7u7ympjvgX5HR0c0NDT+9vb62tn3xsX1sK/2u7rrU0/87e3CwsKdnZ2AgIBcXFzb29vV1dXxjou7u7t6enruc3BiYmL50M+hoaHtZGD75OOlpaXzpqQ0bAL/AAAAFnRSTlMA8PvWuOtIcioQlYxB59tqFE8l3a8kjXPUcQAAAT9JREFUOMuNlNl2gjAURRWc59r23ihEIQwqinPb//+zhrAgS0KC+xH2w1lZ555Wlf70s98y07ORM/swKIMO4ma32yB2BhplOLJwu18DrB9btEaLOmfeRevggMA5WNie14ZJjlByvCHavRfl+4uHOcML5yzaUoYZ52EqrPc82niYO5Mu4sWBGpwLYnciJBuTExTELAjCHyg4JWgLqY2r4pvnEkEUeJCzwnZVuvL/lEZcC7QSIyQEju9S0EopuYJEI9F3JJdn8Zokn3DoH4tNEoQk53k3SBCH7lNooV4SeHeeLdJJkoAQv1HyDRJL4/ItPI3EeOA09H1GCXHVTGUHCqihBXGQVSBKmfKYsnQSpXSG+h6svL7Nh1Cw7KgnpV67OM6bcpzNZ167QItsMB7ZYPzqBqN5emS0mXHE5BxOlTD/OU5QNy8xlW4AAAAASUVORK5CYII=" alt=""></div>
                <p >关于商城</p>
              </div>
              <span>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import bus from '.././../../bus'
export default {
  name:'my',
  data(){
    return {
      // userName:'未登录'
    }
  },
  methods:{
    // myName(){
    //   this.$store.commit('userName',this.userName)
    // },
    cancel(){
      this.$router.push('/login')
    }
  },
  mounted(){
    // this.myName()
    bus.$emit("ShowBack" ,{data:false,data1:"个人中心",data2:false})
    // if(this.$route.query.user ==  undefined){
    //   this.userName = this.userName
    // }else  {
    //  this.userName =  this.userName = this.$route.query.user.substr(0,3) + '****' + this.$route.query.user.substr(7,4)
    // }
    
  }
}
</script>
<style lang="stylus" scoped>
  .my
    background-color #f5f5f5
    padding-bottom .48rem
    flex 1
    overflow auto
    font-size .12rem
    .userInfo
      width 100%
      height 1.92rem
      background url(//mall01.sogoucdn.com/cdn/h5/static/images/uc-header-bac.24fbeb3b046caa5a65d359583c38784d.png) no-repeat
      background-size 100%
      .cancel
        display block
        height .15rem
        padding .1rem 
        color rgba(255,255,255,.2)  
        p
          float right
      .userInfos
        height 1.1rem
        display flex
        align-items center
        height .6rem
        padding-left .25rem
        .userImg
          width .6rem
          height .6rem
          img   
            width 100%
            height 100%
        .userName
          line-height: 0.57rem
          font-size: .19rem
          color: #fff
          padding-left: .19rem
    
    .BacBox 
      position relative 
      margin 0 .1rem
      .myOrdForm
        position absolute
        left 0
        top -0.6rem
        background-color #fff
        border-radius .02rem
        width 100%    
        .fromTitle
          display flex
          justify-content space-between
          align-items center
          line-height .4rem
          height .4rem
          i
            font-size .1rem
          
          p
            font-size .17rem
            color #262626
            font-weight 700
            padding-left .16rem
          span
            align-self center
            padding-right .16rem
            line-height 1
            color #8c8c8c
        .shopStatus
          display flex
          justify-content space-around
          align-items center
          height: .8rem
          ul
            display flex
            justify-content space-around
            align-items center
            width 100%
            li
              display flex
              flex-direction column
              justify-content space-around
              align-items center
              margin-top -0.1rem
              
              .imgBox
                height .3rem
                width .3rem
                img
                  width 100%
                  height 100%
              p 
                width .6rem
                text-align center
                margin-top .08rem   
                color #262626    
      .list
        position absolute
        left 0
        top .6rem
        margin-bottom .8rem
        ul
          padding 0
          width 100%
          li
            margin 0
            width 100%
            height 0.52rem
            border 0
            border-top .01rem solid #f5f5f5
            display flex
            justify-content space-between
            align-items center
            background #fff
            border-radius 0
            padding 0
            box-sizing content-box
            color #262626
            div
              display flex
              .imgLog
                width 0.19rem
                height 0.19rem
                margin 0 .1rem
                img
                  width 100%
                  height 100%  
              p
                color #262626
                font-size .14rem
            span
              margin-right  .2rem
              i
                font-size 0.16rem
                color rgb(140, 140, 140)
    
</style>