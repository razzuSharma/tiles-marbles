import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p>© 2025 Sibam Marble and Tiles Suppliers. All rights reserved.</p>
          <p className="text-sm text-gray-400">Crafted with passion and precision.</p>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-right space-y-2 md:space-y-0">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaPhone className="text-yellow-400" /> 9824068991 / 9804933349
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            <MdEmail className="text-yellow-400" /> sangroulasujan1@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
