import style from './index.module.scss'
import { GoMail } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { SlClock } from "react-icons/sl";
export function Footer() {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.row}>
                    <div className={style.col1}>
                        <p className={style.mainText}>ĐĂNG KÝ NHẬN THÔNG TIN QUA EMAIL</p>
                        <p className={style.subText}>Chia sẻ email để luôn nhận được thông tin ưu đãi mới nhất và hấp dẫn nhất!</p>
                    </div>

                    <div className={style.col2}>
                        <div className={style.inputGroup}>
                            <input placeHolder="Xin vui lòng nhập địa chỉ email của bạn"></input>
                            <GoMail className={style.icon} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.body}>
                <div className={style.row1}>
                    <div className={style.col1}>
                        <p className={style.title}>HỆ THỐNG ROHTO AOHAL CLINIC</p>
                        <ul>
                            <li>
                                <div className={style.item}>
                                    <FaHome className={style.icon} />
                                    <span>Chi nhánh 1: 02 Phạm Đình Toái, Phường 6, Quận 3, TP. HCM</span>
                                </div>

                                <div className={style.item}>
                                    <FaPhoneAlt className={style.icon} />
                                    <span>Điện thoại: (028) 3930 9555</span>
                                </div>

                                <div className={style.item}>
                                    <FaLocationDot className={style.icon} />
                                    <span><a>Xem bản đồ</a></span>
                                </div>
                            </li>

                            <li>
                                <div className={style.item}>
                                    <FaHome className={style.icon} />
                                    <span>Chi nhánh 2: 207/4 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM</span>
                                </div>

                                <div className={style.item}>
                                    <FaPhoneAlt className={style.icon} />
                                    <span>Điện thoại: (028) 3930 9555</span>
                                </div>

                                <div className={style.item}>
                                    <FaLocationDot className={style.icon} />
                                    <span><a>Xem bản đồ</a></span>
                                </div>
                            </li>

                            <li>
                                <div className={style.item}>
                                    <FaHome className={style.icon} />
                                    <span>Chi nhánh 3: 136 Triệu Việt Vương, Phường Nguyễn Du, Quận Hai Bà Trưng, HN</span>
                                </div>

                                <div className={style.item}>
                                    <FaPhoneAlt className={style.icon} />
                                    <span>Điện thoại: (028) 3930 9555</span>
                                </div>

                                <div className={style.item}>
                                    <FaLocationDot className={style.icon} />
                                    <span><a>Xem bản đồ</a></span>
                                </div>
                            </li>

                            <li>
                                <p><span>Email</span>: info@rohtoaohalclinic.com.vn</p>
                            </li>
                        </ul>
                    </div>

                    <div className={style.col2}>
                        <p className={style.title}>THÔNG TIN</p>

                        <ul>
                            <li>Giới thiệu ROHTO AOHAL CLINIC</li>
                            <li>Đội ngũ bác sĩ</li>
                            <li>Điều trị thâm nám</li>
                            <li>Trẻ hóa da - Điều trị thẩm mỹ</li>
                            <li>Cảm nhận khách hàng</li>
                            <li>Thư viện hình</li>
                            <li>Thư viện video</li>
                            <li>Liên hệ - Góp ý</li>
                        </ul>
                    </div>

                    <div className={style.col3}>
                        <div className={style.facebookPage}>
                            <img className={style.background} src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/369292289_705170861654723_216184805657103494_n.png?stp=dst-png_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=qITeqGnYWoQAX-pQ5Ri&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDOZeTQDqXNjuDP9im5IOdl4aWEZ5fkceX5lwItMuUnLg&oe=65BDCE92'></img>

                            <div className={style.avatar}>
                                <img src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/322855959_1566303983815678_2746240873074482709_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=7wZwqH5r5vUAX-IjeVK&_nc_ht=scontent.fhan20-1.fna&oh=00_AfBnX01t-fuzK1aqdGCcCDd7xFQSux-boKbqOtwHfzV3CQ&oe=65BD6867'></img>
                            </div>

                            <div className={style.infor}>
                                <p className={style.mainText}>ROHTO AOHAL Clinic</p>
                                <p className={style.subText}>16.431 người theo dõi</p>
                            </div>

                            <div className={style.buttons}>
                                <button><FaFacebookSquare className={style.iconFollow} /> Theo dõi Trang</button>
                                <button> <FaShare className={style.iconShare} /> Chia sẻ</button>
                            </div>
                        </div>

                        <div className={style.social}>
                            <div className={style.buttons}>
                                <button><TfiYoutube className={style.icon} /></button>
                                <button><PiInstagramLogo className={style.icon} /></button>
                                <button><FaFacebookF className={style.icon} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.row2}>
                    <div className={style.dFlex}>
                        <div className={style.col1}>
                            <img src='https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/42008041469/original/Mo9gDy2XMZLppkUw4sWCsYV-lk65HqqgQw.gif?1539077990'></img>
                        </div>

                        <div className={style.col2}>
                            <ul>
                                <li>Giấy phép kinh doanh số: 3700239769-001 cấp ngày 04/07/2014 bởi Sở Kế hoạch và Đầu Tư TP.Hồ Chí Minh</li>
                                <li>Cơ quan chủ quản: CHI NHÁNH SỐ 2 CỦA CÔNG TY TNHH ROHTO-MENTHOLATUM (VIỆT NAM)</li>
                                <li>Người đại diện: SHUNSUKE SHINODA</li>
                            </ul>
                        </div>

                        <div className={style.col3}>
                            <div className={style.row}>
                                <div className={style.col1}>
                                    <div className={style.clock}>
                                        <SlClock className={style.icon} />
                                    </div>
                                </div>

                                <div className={style.col2}>
                                    <p className={style.mainText}>Giờ làm việc:</p>
                                    <p className={style.subText}>8:30 - 19:30 (cả thứ 7 và chủ nhật)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.footer}>
                <div className={style.infor}>
                    <p className={style.copyright}><span>Copyright © 2018</span> ROHTO AOHAL CLINIC</p>
                    <p><span>Thiết kế web :</span> TRUST.vn</p>
                </div>
            </div>

        </div >
    )
}