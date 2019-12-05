<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="users")
 */
class User implements UserInterface
{
    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @var array
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @var string
     * @ORM\Column(type="string", length=35, nullable=true)
     */
    private $firstName;

    /**
     * @var string
     * @ORM\Column(type="string", length=35, nullable=true)
     */
    private $lastName;

    /**
     * @var string
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $jobTitle;

    /**
     * @var bool
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isFormerEmployee;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", name="updated_at", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserSkill", mappedBy="user_id")
     */
    private $userSkills;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->userSkills = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     *
     * @return User
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     * @see UserInterface
     *
     * @return string
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return array
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param array $roles
     *
     * @return User
     */
    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return (string) $this->firstName;
    }

    /**
     * @param string $firstName
     *
     * @return User
     */
    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return (string) $this->firstName;
    }

    /**
     * @param string $lastName
     *
     * @return User
     */
    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * @return string
     */
    public function getJobTitle(): string
    {
        return (string) $this->jobTitle;
    }

    /**
     * @param string $jobTitle
     *
     * @return User
     */
    public function setJobTitle(string $jobTitle): self
    {
        $this->jobTitle = $jobTitle;

        return $this;
    }

    /**
     * @return bool
     */
    public function getIsFormerEmployee(): bool
    {
        return (bool) $this->isFormerEmployee;
    }

    /**
     * @param bool $isFormerEmployee
     *
     * @return User
     */
    public function setIsFormerEmployee(bool $isFormerEmployee): self
    {
        $this->isFormerEmployee = $isFormerEmployee;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTime $createdAt
     *
     * @return User
     */
    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    /**
     * @param \DateTime $updatedAt
     *
     * @return User
     */
    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @see UserInterface
     *
     * @return string
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    /**
     * @param string $password
     *
     * @return User
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|UserSkill[]
     */
    public function getUserSkills(): Collection
    {
        return $this->userSkills;
    }

    /**
     * @param UserSkill $userSkill
     *
     * @return User
     */
    public function addUserSkill(UserSkill $userSkill): self
    {
        if (!$this->userSkills->contains($userSkill)) {
            $this->userSkills[] = $userSkill;
            $userSkill->setUserId($this);
        }

        return $this;
    }

    /**
     * @param UserSkill $userSkill
     *
     * @return User
     */
    public function removeUserSkill(UserSkill $userSkill): self
    {
        if ($this->userSkills->contains($userSkill)) {
            $this->userSkills->removeElement($userSkill);
            // set the owning side to null (unless already changed)
            if ($userSkill->getUserId() === $this) {
                $userSkill->setUserId(null);
            }
        }

        return $this;
    }
}
