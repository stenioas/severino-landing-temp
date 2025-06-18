import { useRef, useState } from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import { getAssetUrl } from '../../utils/getAssetUrl';

const AppStoreButtons = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSoonButtonClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsPopoverOpen(true);
    timeoutRef.current = setTimeout(() => setIsPopoverOpen(false), 5000);
  };

  return (
    <div className="flex gap-3">
      <Button
        radius="sm"
        style={{ backgroundColor: '#000000', padding: '6px 12px' }}
      >
        <img src={getAssetUrl('play_store.svg')} alt="Play Store" />
      </Button>

      <Popover
        placement="top-start"
        shadow="none"
        className="dark"
        radius="sm"
        isOpen={isPopoverOpen}
        onOpenChange={handleSoonButtonClick}
      >
        <PopoverTrigger>
          <Button
            radius="sm"
            style={{ backgroundColor: '#7B7B7B', padding: '6px 12px' }}
          >
            <img src={getAssetUrl('app_store.svg')} alt="App Store" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.25rem',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: 0,
              color: '#FFFFFF',
              padding: '0.375rem 0.125rem',
            }}
          >
            Em breve
            {/**<XMarkIcon className="w-4 h-4" /> */}
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AppStoreButtons;
