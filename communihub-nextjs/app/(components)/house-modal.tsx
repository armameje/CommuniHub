import { house } from "@/public/interface/iHouseList";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

interface houseModalProps extends house {
  onModalClose: () => void;
  showHouseModal: boolean;
}

export default function HouseModal(props: houseModalProps) {
  const { ownerId, owner, capacity, age, birthday, hobbies, onModalClose, showHouseModal } = props;

  if (showHouseModal) {
    document.body.classList.add("active-service-modal");
  } else {
    document.body.classList.remove("active-service-modal");
  }

  return (
    <AnimatePresence mode="wait">
      {showHouseModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onModalClose} className="service-modal-overlay relative z-40">
          <motion.div initial={{ y: "-100vh", opacity: 0 }} animate={{ y: "50%", opacity: 1 }} transition={{ delay: 0.5 }} className="modal-content flex gap-8">
            <div>
              <img src={`member-${ownerId}.jpg`} alt={owner} className="w-72 h-72" />
            </div>
            <div className="flex flex-col grow justify-between pb-16">
              <div className="flex justify-between">
                <div className="text-2xl font-bold">{owner}</div>
                <div>
                  <GrClose onClick={onModalClose} />
                </div>
              </div>
              <div className="text-xl">{capacity}</div>
              <div className="text-md">
                <p>Age: {age} years old</p>
                <p>Birth: {birthday}</p>
                <p>Hobbies: {hobbies}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
